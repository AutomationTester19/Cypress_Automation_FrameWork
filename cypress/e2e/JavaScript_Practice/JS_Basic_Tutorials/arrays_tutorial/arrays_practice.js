let arr = [1,2,3,4,5,6];

const fact_num = arr.reduce((x1,x2) => {
    return x1*x2;
})

console.log(fact_num)


let numbers = [10,20,30,40,50];


// find the largest and smallest number from above array 

let largest_number = numbers[0];
let smallest_number = numbers[0];

for(a = 0; a<numbers.length;a++){

    if(numbers[a]>largest_number){
        largest_number = numbers[a];
    }
    else if(numbers[a]<smallest_number){
        smallest_number = numbers[a];
    }

}

 console.log(largest_number);
 console.log(smallest_number)


 // sort the array
 console.log("### SORTING THE ARRAY IN DESECENDING ORDER#####")

let sort_array = [20,17,19,16,18,15];
let temp=0;
for(row=0;row<sort_array.length;row++){

    for(col=0;col<sort_array.length;col++){

        if(sort_array[row]>sort_array[col]){
          temp = sort_array[row];
          sort_array[row] = sort_array[col];
          sort_array[col] = temp;
        }
    }
}

console.log(sort_array)