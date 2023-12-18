function addEdge(heap, value){
    heap.push(value);
    let curIdx = heap.length-1;
     
    while(curIdx > 0){
        let parIdx = Math.floor((curIdx-1)/2);
        if(heap[parIdx] > heap[curIdx]){
            [heap[parIdx], heap[curIdx]] = [heap[curIdx],heap[parIdx]];
            curIdx = parIdx;
        }
        else{
            break;
        }
    } 
}

function popEdge(heap){
    const min = heap[0];
    if(heap.length===1) return heap.pop();
    heap[0] = heap.pop();
    let curIdx = 0;
    while(true){
		let leftIdx = curIdx*2+1;
		let rightIdx = curIdx*2+2;
        if(heap[leftIdx] < heap[rightIdx]){
            if(heap[curIdx] > heap[leftIdx]){
                [heap[leftIdx], heap[curIdx]] = [heap[curIdx],heap[leftIdx]];
                curIdx = leftIdx;
            }
            else if(heap[curIdx] > heap[rightIdx]){
                [heap[rightIdx], heap[curIdx]] = [heap[curIdx],heap[rightIdx]];
                curIdx = rightIdx;
            }
            else{
                break;
            }
        }
        else{
            if(heap[curIdx] > heap[rightIdx]){
                [heap[rightIdx], heap[curIdx]] = [heap[curIdx],heap[rightIdx]];
                curIdx = rightIdx;
            }
            else if(heap[curIdx] > heap[leftIdx]){
                [heap[leftIdx], heap[curIdx]] = [heap[curIdx],heap[leftIdx]];
                curIdx = leftIdx;
            }
            else{
                break;
            }
        }
    }
    return min;
}


function solution(scoville, K) {
  let answer = 0;
  const heap = [];
  for(let i=0; i<scoville.length; i++){
      addEdge(heap, scoville[i]);
  }
    
  while(heap.length > 1){
      if(K <= heap[0]){
          break;
      };
      let min = popEdge(heap);
      let min2 = popEdge(heap);
      let value = min + (min2*2)
      addEdge(heap, value);
      answer++;
  }
  
  return heap[0] >= K? answer : -1;
}