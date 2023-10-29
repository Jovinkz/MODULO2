// Função para trocar os valores de duas posições em um vetor
const swap = (arr, pos1, pos2) => {
    const temp = arr[pos1];
    arr[pos1] = arr[pos2];
    arr[pos2] = temp;
  };
  
  // Função para embaralhar os elementos de um vetor
  const shuffle = (arr, numSwaps) => {
    const length = arr.length;
    for (let i = 0; i < numSwaps; i++) {
      const randomIndex1 = Math.floor(Math.random() * length);
      const randomIndex2 = Math.floor(Math.random() * length);
      swap(arr, randomIndex1, randomIndex2);
    }
  };
  
  // Função para ordenar um vetor de inteiros com o algoritmo Bubble Sort
  const bubble_sort = (arr) => {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          swap(arr, j, j + 1);
        }
      }
    }
  };
  
  // Função para ordenar um vetor de inteiros com o algoritmo Selection Sort
  const selection_sort = (arr) => {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        swap(arr, i, minIndex);
      }
    }
  };
  
  // Função para ordenar um vetor de inteiros com o algoritmo Quick Sort
  const quick_sort = (arr, start, end) => {
    if (start < end) {
      const pivotIndex = partition(arr, start, end);
      quick_sort(arr, start, pivotIndex - 1);
      quick_sort(arr, pivotIndex + 1, end);
    }
  };
  
  // Função de particionamento para o Quick Sort
  const partition = (arr, start, end) => {
    const pivot = arr[end];
    let i = start - 1;
  
    for (let j = start; j < end; j++) {
      if (arr[j] <= pivot) {
        i++;
        swap(arr, i, j);
      }
    }
  
    swap(arr, i + 1, end);
    return i + 1;
  };
  
  // Exemplo de uso das funções
  const arrayToSort = [5, 3, 8, 2, 1, 4];
  console.log("Array antes da ordenação:", arrayToSort);
  
  bubble_sort(arrayToSort);
  console.log("Array após Bubble Sort:", arrayToSort);
  
  selection_sort(arrayToSort);
  console.log("Array após Selection Sort:", arrayToSort);
  
  shuffle(arrayToSort, 3);
  console.log("Array após embaralhar:", arrayToSort);
  
  quick_sort(arrayToSort, 0, arrayToSort.length - 1);
  console.log("Array após Quick Sort:", arrayToSort);
  