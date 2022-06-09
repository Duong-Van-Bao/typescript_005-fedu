// var x: number;
// var y: number;
// var tbc: number;
// function tinh1(): void {
//     x = 10;
//     y = 15;
//     tbc = (x + y) / 2;
//     console.log("trung binh cong cua x la :" + tbc)
// }


// function tinh2(): void {
//     x = 1000;
//     y = 722;
//     tbc = (x + y) / 2;
//     console.log("trung binh cong cua " + x + " va " + y + " x la :" + tbc)
// }

function tinhtbc(x: number, y: number): void {
    var tbc = (x + y) / 2;
    console.log("trung binh cong cua " + x + " va " + y + " x la :" + tbc)
}

var z = function (x: number, y: string): string {
    return `Chao ${y}, nam nay ban ${x} tuoi phai khong`
}

var g: (x: number, y: string) => string = function (x, y) {
    return `Chao ${y}, nam nay ban ${x} tuoi phai khong`
}

// function kieu ko can function 
var h = (x: number): number => {
    return x + 10;
}

console.log(h(9));

function tinh6(x: number): number {
    return x + 10;
}

console.log(tinh6(9));
