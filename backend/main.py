import firebase_admin
from firebase_admin import credentials, firestore

# 1. CARGAR LA LLAVE 🔑 
# (Confirmado: firebasePrivateKey.json)
cred = credentials.Certificate("firebasePrivateKey.json")
firebase_admin.initialize_app(cred)

# 2. INICIALIZAR LA BASE DE DATOS ESPECIFICANDO EL ID 🏗️
# Aquí le decimos explícitamente que use '(default)'
db = firestore.client(database_id="default")

print("🚀 ¡Conexión exitosa! El motor de Python está en línea con Firebase.")

# 3. FUNCIÓN DE PRUEBA: Crear un proyecto inicial
def crear_proyecto_inicial():
    print("Enviando datos de prueba...")
    try:
        doc_ref = db.collection('projects').document('proyecto_001')
        doc_ref.set({
            'name': 'Mi Primer Proyecto IA',
            'budget': 5000,
            'status': 'Iniciado',
            'ai_insight': 'Presupuesto optimizado al 10%'
        })
        print("✅ ¡Éxito! Revisa tu consola de Firebase en el navegador.")
    except Exception as e:
        print(f"❌ Error al enviar datos: {e}")

# Ejecutar la prueba
crear_proyecto_inicial()