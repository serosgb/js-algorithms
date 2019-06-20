let items = [5,1,4,2,8,0, 1];


let recheck = true;

while(recheck) {
recheck = false;  
for (let index = 0; index < items.length - 1; index ++) {
  if (items[index] > items[index + 1]) {
    let item = items[index];
    items[index] = items[index + 1];
    items[index + 1] = item;
    recheck = true;
  }
}
  if (recheck){
    console.log(items);
  }

}

console.log(items);
