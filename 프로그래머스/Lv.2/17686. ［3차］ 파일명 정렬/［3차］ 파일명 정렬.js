function compareHead(file1,file2){
    const head_regex = /[^0-9]+/;
    
    const head1 = file1.match(head_regex)[0].toUpperCase();
    const head2 = file2.match(head_regex)[0].toUpperCase();
    
    if(head1>head2){
        return 1;
    }
    else if(head1<head2){
        return -1;
    }

    const numberCompared = compareNumber(file1,file2);
    
    return numberCompared
    
}

function compareNumber(file1, file2){
    const number_regex = /\d+/;
    const number1 = Number(file1.match(number_regex)[0]);
    const number2 = Number(file2.match(number_regex)[0]);
    
    if(number1 > number2){
        return 1;
    }
    else if(number1 < number2){
        return -1
    }
    return 0;
}


function solution(files) {
    return files.sort(compareHead);
}