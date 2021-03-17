import List from './list-items';
import Searcher from './search'
const Index = () => {
    const items = [
        {
            name : 'Frenkie',
            description : 'Barcelona and Netherland'
        },
        {
            name : 'Messi',
            description : 'Barcelona and Argentina'
        },
        {
            name : 'Luiz Suarez',
            description : 'Atletico Madrid and Uruguay'
        }
    ]
    return (
        <div>
            <List items={items}/>
            <Searcher/>
        </div>
    )
};
export default Index;