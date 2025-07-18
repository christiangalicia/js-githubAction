const { suma, dividir } = require('../src/operaciones');

// Funciones de prueba
function test(desc, fn) {
  try {
    fn();
    console.log("✅ " + desc);
  } catch (error) {
    console.error("❌ " + desc);
    console.error("   " + error.message);
    process.exitCode = 1; // Marca fallo en CI
  }
}

function assertEquals(actual, esperado) {
  if (actual !== esperado) {
    throw new Error(`Esperado: ${esperado}, pero obtuvo: ${actual}`);
  }
}

// Pruebas
test("Suma 2 + 2 = 4", () => {
  assertEquals(suma(2, 2), 4);
});


test("Suma 3 + 0 = 3", () => {
  assertEquals(suma(3, 0), 3);
});
test("Suma 3 + 2 = 5", () => {
  assertEquals(suma(3, 2), 5);
});

test("Dividir 4 / 2 = 2", () => {
  assertEquals(dividir(4, 2), 2);
});

test("Dividir entre 0", () => {
  assertEquals(dividir(4, 0), "Error");
});