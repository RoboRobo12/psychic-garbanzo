import {Sorter} from "./Sorter";

export class NumbersCollection extends Sorter {
    data: number[];

    constructor(arg) {
        super();
        this.data = arg;
    };

    get length(): number {
        return this.data.length
    }

    public compare(leftIndex: number, rightIndex: number): boolean {
        return this.data[leftIndex] > this.data[rightIndex];
    }

    public swap(leftIndex: number, rightIndex: number): void {
        const leftItem = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftItem;
    }
}