import { Fragment } from 'react';
import { StarIcon } from '@heroicons/react/solid';
import { Tab } from '@headlessui/react';
import Review from '../Review/review';
import Slider from 'react-slick';
import CenterMode from '../SliderItems/slider';
import { Price } from './Price';
const product = {
    name: 'name  of  product  ',
    version: { name: '2.0', date: 'June 5, 2021', datetime: '2021-06-05' },
    price: '$220',
    description:
        'The Application UI Icon Pack comes with over 200 icons in 3 styles: outline, filled, and branded. This playful icon pack is tailored for complex application user interfaces with a friendly and legible look.',
    highlights: ['', '', ''],
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-05-product-01.jpg',
    imageAlt: 'Sample of 30 icons with friendly and fun details in outline, filled, and brand color styles.',
};
const reviews = {
    average: 4,
    featured: [
        {
            id: 1,
            rating: 5,
            content: `
        <p>This icon pack is just what I need for my latest project. There's an icon for just about anything I could ever need. Love the playful look!</p>
      `,
            date: 'July 16, 2021',
            datetime: '2021-07-16',
            author: 'Emily Selman',
            avatarSrc:
                'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
        },
        {
            id: 2,
            rating: 5,
            content: `
        <p>Blown away by how polished this icon pack is. Everything looks so consistent and each SVG is optimized out of the box so I can use it directly with confidence. It would take me several hours to create a single icon this good, so it's a steal at this price.</p>
      `,
            date: 'July 12, 2021',
            datetime: '2021-07-12',
            author: 'Hector Gibbons',
            avatarSrc:
                'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
        },
        // More reviews...
    ],
};

function classNames(...classes: Array<string>) {
    return classes.filter(Boolean).join(' ');
}

interface Review {
    id: string;
    userName: string;
    image: string;
    data: Date;
    description: string;
    actualReview: number;
    counts: number;
    reviews: {
        one: number;
        tow: number;
        three: number;
        four: number;
        five: number;
    };
}
interface HouseItem {
    title: string;
    review: number;
    price: number;
    room: number;
    category: number;
    images: Array<string>;
}

export default function HouseItem() {
    return (
        <div className="bg-white">
            <div className="mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                {/* Product */}
                <div className="lg:grid lg:grid-rows-1 lg:grid-cols-7 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
                    {/* Product image */}
                    <div className="lg:row-end-1 lg:col-span-4">
                        <div className="aspect-w-4 aspect-h-3 rounded-lg w-full h-full overflow-hidden">
                            <CenterMode />
                        </div>
                    </div>

                    {/* Product details */}
                    <div className="max-w-2xl mx-auto mt-14 sm:mt-16 lg:max-w-none lg:mt-0 lg:row-end-2 lg:row-span-2 lg:col-span-3">
                        <div className="flex flex-col">
                            <div className="mt-4">
                                <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                                    {product.name}
                                </h1>

                                <h2 id="information-heading" className="sr-only">
                                    Product information
                                </h2>

                                <p className="text-sm text-gray-500 mt-2">
                                    (Created <time dateTime={product.version.datetime}>{product.version.date}</time>)
                                </p>
                            </div>

                            <div>
                                <h3 className="sr-only">Reviews</h3>
                                <div className="flex items-center">
                                    {[0, 1, 2, 3, 4].map((rating) => (
                                        <StarIcon
                                            key={rating}
                                            className={classNames(
                                                reviews.average > rating ? 'text-yellow-400' : 'text-gray-300',
                                                'h-5 w-5 flex-shrink-0',
                                            )}
                                            aria-hidden="true"
                                        />
                                    ))}
                                    <p>1222</p>
                                </div>

                                <p className="sr-only">{reviews.average} out of 5 stars</p>
                            </div>
                        </div>

                        <Price className="text-gray-500 mt-6">6000 usdt</Price>
                        <p className="text-gray-500 mt-6">{product.description}</p>

                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
                            <button
                                type="button"
                                className="w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                            >
                                Pay {product.price}
                            </button>
                            <button
                                type="button"
                                className="w-full bg-indigo-50 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-indigo-700 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                            >
                                Preview
                            </button>
                        </div>

                        <div className="border-t border-gray-200 mt-10 pt-10">
                            {/* <h3 className="text-sm font-medium text-gray-900">Highlights</h3> */}
                            <div className="mt-4 prose prose-sm text-gray-500">
                                <ul role="list">
                                    {product.highlights.map((highlight) => (
                                        <li key={highlight}>{highlight}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full max-w-2xl mx-auto mt-16 lg:max-w-none lg:mt-0 lg:col-span-4">
                    <Tab.Group as="div">
                        <div className="border-b border-gray-200">
                            <Tab.List className="-mb-px flex space-x-8">
                                <Tab
                                    className={({ selected }) =>
                                        classNames(
                                            selected
                                                ? 'border-indigo-600 text-indigo-600'
                                                : 'border-transparent text-gray-700 hover:text-gray-800 hover:border-gray-300',
                                            'whitespace-nowrap py-6 border-b-2 font-medium text-sm',
                                        )
                                    }
                                >
                                    DESCRIPTION
                                </Tab>
                                <Tab
                                    className={({ selected }) =>
                                        classNames(
                                            selected
                                                ? 'border-indigo-600 text-indigo-600'
                                                : 'border-transparent text-gray-700 hover:text-gray-800 hover:border-gray-300',
                                            'whitespace-nowrap py-6 border-b-2 font-medium text-sm',
                                        )
                                    }
                                >
                                    REVIEWS (1411)
                                </Tab>
                            </Tab.List>
                        </div>
                        <Tab.Panels as={Fragment}>
                            <Tab.Panel className="-mb-10">
                                <h3 className="sr-only">Customer Reviews</h3>
                                <Review />
                            </Tab.Panel>

                            <Tab.Panel as="dl" className="text-sm text-gray-500">
                                <h3 className="sr-only">Description</h3>
                                some text
                            </Tab.Panel>
                        </Tab.Panels>
                    </Tab.Group>
                </div>
            </div>
        </div>
    );
}
