
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let a=0,indexOfMas=0,mas =[];
    if(!matrix) return [];
    for(let i=0; i<matrix.length;i++){
        for(let j=0;j<matrix[i].length/2;j++){
            if(i%2==1){
                a=matrix[i][j];
                matrix[i][j]=matrix[i][matrix[i].length - j -1];
                matrix[i][matrix[i].length -j -1]=a;
            }
        }
    }
    for(let k=0; k<matrix.length;k++){
        for(let l=0;l<matrix[k].length;l++){
            mas[indexOfMas++]=matrix[k][l];
        }
    }
    return mas;
}
