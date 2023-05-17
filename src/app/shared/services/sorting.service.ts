import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
/***
 * Sorting Service is used as a helper for
 * sorting the products
 */
export class SortingService {
  constructor() {}

  /***
   * Merge Sort - Top2Down
   * Divide and Conquer Implementation
   * @param start as initial Index position
   * @param end the last Index position to order
   * @param D array of items to sort
   * Given an Array<T> D of any items
   * where 0 is "start" the initial Index of the Array D
   * D.lenght the "end" the lenght of the Array
   * eg.:  SortingService.mergeSort(0, D.length);
   */
  function mergeSort(start: any, end: any, D: Array<any>) {

    if (Math.abs(end - start) <= 1) return [];
    const middle = Math.ceil((start + end) / 2);

    mergeSort(start, middle, D);
    mergeSort(middle, end, D);


    return mergeSort.merge(start, middle, end, D);
  }

  mergeSort.merge = (start, middle, end, D) => {
    const leftSize = middle - start;
    const rightSize = end - middle;
    const maxSize = Math.max(leftSize, rightSize);
    const size = end - start;
    const left = [];
    const right = [];
    let i;

    for (i = 0; i < maxSize; i++) {
      if (i < leftSize) {
        left.push(D[start + i]);
      }
      if (i < rightSize) {
        right.push(D[middle + i]);
      }
    }

    i = 0;
    while (i < size) {
      if (left[0] && right[0]) {
        if (left[0] > right[0]) {
          D[start + i] = right.shift();
        } else {
          D[start + i] = left.shift();
        }
      } else if (left[0]) {
        D[start + i] = left.shift();
      } else {
        D[start + i] = right.shift();
      }


      i++;
    }

    const tempArray = [];
    for (i = start; i < end; i++) tempArray.push(D[i]);
  };

}
