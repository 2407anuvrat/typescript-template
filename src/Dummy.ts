export const dummyOutput = (input: string) => {
    return input + input
}

export function primeFactor(a: number){
    let list = []
    let c = 2
    while(a>1)
    {
        if(a%c==0){
        a = a/c;
        list.push(c)
        }
        else c++;
    }
    return list;
}