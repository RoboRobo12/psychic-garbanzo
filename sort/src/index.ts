import { LinkedList } from "./LinkedList";
import { NumbersCollection } from "./NumbersCollection";
import { CharacterCollection } from "./CharacterCollection";

const numberCollection = new NumbersCollection([10, 0, 5, -150]);
numberCollection.sort()
console.log(numberCollection.data)
const cher = new CharacterCollection("aaxaaXh");
cher.sort()
console.log(cher.data)

const linkedList = new LinkedList();
linkedList.add(100);
linkedList.add(-11);
linkedList.add(-3);
linkedList.add(7);


linkedList.sort();
linkedList.print();
