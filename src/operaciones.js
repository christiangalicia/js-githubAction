//GitHub Actions ejecuta tareas normalmente en un entorno Node.js para JavaScript. 
// Así que necesitamos convertir el codgio  a módulos JS comunes.

function suma(a, b) {
  return a + b;
}

function dividir(a, b) {
  if (b === 0) return "Error";
  return a / b;
}

module.exports = { suma, dividir };

