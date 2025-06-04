export interface ItemSliderModel {
    id: number;
    component: 'service-page-blocks.item-slider';
    title: string;
    displayOrder: number;
    itemSlides: ItemSlideModel[];
}

export interface ItemSlideModel {
    id: number;
    title: string;
    textContent: string;
    buttonTitle: string;
    imageUrl: object;
}