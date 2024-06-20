import React from "react";

const Index = () => {
    let oldArr = [-6, 20, 8, -2, 4]
    const BubbleSort = (arr) => {
        let swapConstant = false
        for (let i=0; i<arr.length-1; i++){
            if(arr[i]>arr[i+1]){
                let temp = arr[i];
                arr[i] = arr[i+1]
                arr[i+1]= temp
                swapConstant = true
            }
        }
        if(swapConstant){
            BubbleSort(arr)
        }
        return arr
    }

    const InsertionSort =(arr)=>{
        for(let i =1 ;i<arr.length-1; i++){
            let numberInsert = arr[i]
            let j = i -1;
            while(j>=0 && arr[j]>numberInsert){
                console.log("--->",arr[j+1],j);
                arr[j+1] = arr[j]
                j = j-1
            }
            arr[j+1]= numberInsert
        }
        return arr
    }

    return (
        <>
            <button onClick={() => { console.log("---->", BubbleSort(oldArr)) }}>Click Me</button>
            <button onClick={() => { console.log("---->", InsertionSort(oldArr)) }}>Insertion Sort</button>

            {/* {console.log("---->", BubbleSort(oldArr))} */}
        </>
    )
}

export default Index