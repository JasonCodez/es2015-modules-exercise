function choice (items) {
   let randNum = Math.floor(Math.random() * items.length)
   return items[randNum];
}

function remove(items, item) {
   const idx = items.indexOf(item);
   if (idx > -1) {
      items.splice(idx, 1);
   } else {
      return undefined;
   }
   return item;
}

export {choice, remove};