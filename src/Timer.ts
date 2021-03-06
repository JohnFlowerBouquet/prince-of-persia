export default class Timer {
    private deltaTime = 1/60;
    private accumulatedTime = 0;
    private lastTime = 0;
    public updateFunction: (deltaTime: number) => void = () => {};
    
    constructor() {}

    public enqueue(): void {
        requestAnimationFrame((time) => this.update(time));
    }

    public start(): void {
        this.enqueue();
    }

    private update(time: number = 0): void {
        this.accumulatedTime += (time - this.lastTime) / 1000;

        while (this.accumulatedTime > this.deltaTime) {
            this.updateFunction(this.deltaTime)
            this.accumulatedTime -= this.deltaTime;
        }
        
        this.lastTime = time;
        this.enqueue();
    }
}