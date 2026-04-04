from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from main import db # Importamos tu conexión de main.py

app = FastAPI()

# 🛡️ Configuración de Aduana (CORS)
# Esto permite que Angular (desde el puerto 4200) hable con Python (puerto 8000)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_methods=["*"],
    allow_headers=["*"],
)

# 📝 El Contrato de Datos (Lo que pediremos en el CRUD)
class ProjectItem(BaseModel):
    name: str
    budget: float
    description: str

@app.get("/")
def home():
    return {"status": "🔥 API de Kevin funcionando", "database": "Firebase Connected"}

# --- EL MINI CRUD ---

@app.post("/projects")
async def create_project(item: ProjectItem):
    """Guarda un proyecto enviado desde Angular o Insomnia"""
    doc_ref = db.collection('projects').document()
    doc_ref.set(item.dict())
    return {"id": doc_ref.id, "message": "Activo registrado en la nube"}

@app.get("/projects")
async def list_projects():
    """Trae todos los proyectos de la base de datos"""
    docs = db.collection('projects').stream()
    return [{"id": d.id, **d.to_dict()} for d in docs]