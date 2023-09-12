interface Subscriber {
    update(msg: any): void;
}

class Youtube {
    private observers: Subscriber[] = [];

    subscribe(observer: Subscriber): void {
        this.observers.push(observer);
    }
    unsubscribe(observer: Subscriber): void {
        this.observers = this.observers.filter(obs => obs !== observer);
    }
    notify(msg: any): void {
        this.observers.forEach(observer => {
            observer.update(msg);
        });}
}

class SubscriberA implements Subscriber {
    update(msg: any): void {
        console.log('SubscriberA ', msg);
    }}

class SubscriberB implements Subscriber {
    update(msg: any): void {
        console.log('SubscriberB received update with msg:', msg);
    }}

const youtube = new Youtube();
const subA = new SubscriberA();
const subB = new SubscriberB();
youtube.subscribe(subA);
youtube.subscribe(subB);
youtube.notify('Video has been uploaded');
youtube.unsubscribe(subA);
youtube.notify('list of upcoming videos');
