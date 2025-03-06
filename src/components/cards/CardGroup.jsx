import { cardDetails } from '../../constants';
import { Card } from './Card';
export const CardGroup = () => {
    return (
        <div className="flex overflow-x-auto scrollbar-hide w-full gap-x-3 py-2 px-1">
            {
                cardDetails.map((el, index) => {
                    return (
                        <Card title={el.title}
                            description={el.description}
                            image={el.path}
                            alt={el.alt}
                            key={index}
                        />
                    )
                })
            }
        </div>
    );
}