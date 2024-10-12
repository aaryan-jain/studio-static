import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class CommonService {
    constructor() {}

    private _content = [
        {
            image: 'https://i.pinimg.com/736x/23/f3/da/23f3dab4bb4df9aa6aa2c8d36201266a.jpg',
            title: 'Nebula Nexus',
            description:
                'Nebula Nexus is an immersive design project that combines futuristic aesthetics with sleek, minimalist user interfaces. Drawing inspiration from the cosmos, it introduces a space-themed visual experience that connects users to infinite possibilities. The project utilizes fluid animations, deep gradients, and interactive elements to create a seamless journey through a universe of data and design. Whether used for web platforms or mobile applications, Nebula Nexus is designed to captivate and inspire users with a visually stunning yet functional digital environment.',
        },
        {
            image: 'https://www.mapsnworld.com/world-map/world-map-800.jpg',
            title: 'Aether Grid',
            description:
                'Aether Grid is a groundbreaking design project that fuses the ethereal and the digital into one cohesive visual experience. With its minimalist design language and grid-based structure, AetherGrid brings clarity and precision to complex interfaces. The project emphasizes clean typography, soft gradients, and subtle animations to create a calm and efficient user journey. Perfect for tech startups, data-driven applications, and innovative platforms, AetherGrid is designed to make the digital feel lightweight and accessible, while still maintaining a sense of futuristic elegance.',
        },
        {
            image: 'https://cdn.shopify.com/s/files/1/0586/4780/6146/files/nurserynamesign_timberwooddesigns.jpg',
            title: 'Lumen Craft',
            description:
                "Lumen Craft is a modern design project focused on harnessing the power of light and shadow to create dynamic visual experiences. The project embraces bold contrasts, vibrant color schemes, and innovative lighting effects to craft interfaces that are both visually appealing and highly functional. LumenCraft's design language is sleek, futuristic, and clean, making it ideal for projects requiring a professional and polished appearance. Perfect for design portfolios, e-commerce platforms, or any creative endeavor, LumenCraft brings light to the digital world in a striking, contemporary way.",
        },
        {
            image: 'https://media.architecturaldigest.com/photos/66843062532726c054221557/16:9/w_2580,c_limit/0X1A5150_HDR-Edit.jpg',
            title: 'Pixel Wave',
            description:
                'PixelWave is a cutting-edge design project that explores the synergy between pixel art and modern web design. Combining retro aesthetics with contemporary functionality, PixelWave takes users on a nostalgic yet innovative visual journey. The project leverages vibrant color palettes, playful animations, and interactive elements to create a memorable user experience. PixelWave is perfect for digital creatives, gaming platforms, or any project looking to infuse fun, creativity, and a dash of nostalgia into its design.',
        },
    ];
    public get content() {
        return this._content;
    }
    public set content(value) {
        this._content = value;
    }
}
