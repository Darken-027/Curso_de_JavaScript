// ============================================================
// EJERCICIOS DE ARREGLOS EN JAVASCRIPT
// ============================================================

// ------------------------------------------------------------
// 🟢 BÁSICOS
// ------------------------------------------------------------

// 1. SUMA DE ELEMENTOS
// Dado un arreglo de números, retorna la suma total
// const nums = [1, 2, 3, 4, 5];
// Resultado esperado: 15

// 2. ENCONTRAR EL MÁXIMO
// Sin usar Math.max(), encuentra el número mayor
// const nums = [3, 7, 2, 9, 4];
// Resultado esperado: 9

// 3. FILTRAR PARES
// Retorna solo los números pares del arreglo
// const nums = [1, 2, 3, 4, 5, 6];
// Resultado esperado: [2, 4, 6]

// ------------------------------------------------------------
// 🟡 INTERMEDIOS
// ------------------------------------------------------------

// 4. APLANAR UN ARREGLO
// Convierte un arreglo de arreglos en uno solo
// const nested = [[1, 2], [3, 4], [5, 6]];
// Resultado esperado: [1, 2, 3, 4, 5, 6]

// 5. ELIMINAR DUPLICADOS
// Retorna el arreglo sin elementos repetidos
// const arr = [1, 2, 2, 3, 4, 4, 5];
// Resultado esperado: [1, 2, 3, 4, 5]

// 6. ROTAR ARREGLO
// Mueve los elementos k posiciones a la derecha
// const arr = [1, 2, 3, 4, 5];
// const k = 2;
// Resultado esperado: [4, 5, 1, 2, 3]

// ------------------------------------------------------------
// 🔴 AVANZADOS
// ------------------------------------------------------------

// 7. AGRUPAR POR PROPIEDAD
// Agrupa objetos por una propiedad dada
// const personas = [
//   { nombre: "Ana", ciudad: "Bogotá" },
//   { nombre: "Luis", ciudad: "Medellín" },
//   { nombre: "Sara", ciudad: "Bogotá" },
// ];
// Resultado esperado:
// { Bogotá: [{...Ana}, {...Sara}], Medellín: [{...Luis}] }

// 8. INTERSECCIÓN DE ARREGLOS
// Retorna los elementos comunes entre dos arreglos
// const a = [1, 2, 3, 4];
// const b = [3, 4, 5, 6];
// Resultado esperado: [3, 4]

// 9. CHUNK (DIVIDIR EN GRUPOS)
// Divide un arreglo en sub-arreglos de tamaño n
// const arr = [1, 2, 3, 4, 5, 6, 7];
// const n = 3;
// Resultado esperado: [[1,2,3], [4,5,6], [7]]