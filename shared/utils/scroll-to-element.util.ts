export default (selector: string) => {
    const card: HTMLElement | null = document.querySelector(selector);
    const mq = window.matchMedia('(max-width: 639px)');

    if (card && mq.matches) {
        card.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
};