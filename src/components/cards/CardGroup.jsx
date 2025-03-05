import { cardDetails } from '../../constants';
import { Card } from './Card';
export const CardGroup = () => {
    return (
        <div className="flex gap-x-3">
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