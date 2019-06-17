import React, { Component } from 'react'



const RoomContext = React.createContext();

export default class RoomProvider extends Component {
    state = {
        rooms:[],
        sortedRooms:[],
        featuredRooms:[],
        loading: true,
        type:'all',
        capacity:'all',
        price:0,
        minPrice:0,
        maxPrice:0,
        minSize:0,
        maxSize:0,
        breakfast: false,
        pets: false
       
    };
  
    componentDidMount(){
        fetch('https://cors-anywhere.herokuapp.com/https://www.jayphan.fi/beachresort/rooms?_format=json')
            .then(response => response.json())
            .then(data => {
                let rooms = this.formatData(data)
                let featuredRooms = rooms.filter( room => room.field_featured === true)
                let maxPrice = Math.max(...rooms.map(item => item.field_price))
                let maxSize = Math.max(...rooms.map(item => item.field_size))
                this.setState({
                    rooms,
                    featuredRooms,
                    sortedRooms: rooms,
                    loading: false,
                    price: maxPrice,
                    maxPrice,
                    maxSize,
                })
            }); 
      
    };

    formatData(data){
        let rooms = data.map(x => {
            let allowed = Object.keys(x).filter(y => y.match(/^field_/) && !y.match(/^field_images/) && !y.match(/^field_extra/))
            let extras = x.field_extra.map(a => a=a.value);
            let images = x.field_images.map(a => a=a.url);
            const filtered = Object.keys(x)
              .filter(key => allowed.includes(key))
              .reduce((obj, key) => {
                obj[key] = x[key][0].value;
                return obj;
              }, {});
            filtered.extras=extras;
            filtered.images=images;
            return filtered
            })
        return rooms
    };
    
    getRoom = slug => {
        let tempRooms = [...this.state.rooms];
        const room = tempRooms.find(room => room.field_slug === slug);
        return room;
    };
    
    handleChange = event => {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        },
        this.filterRoom
        )
    };

    filterRoom = () => {
        let{rooms,
            type,
            capacity,
            price,
            maxPrice,
            minSize,
            maxSize,
            breakfast,
            pets}= this.state
        let tempRooms = [...rooms];
        tempRooms = tempRooms.filter(room => room.field_size >= minSize && room.field_size <= maxSize)
        if(type !== 'all'){
         tempRooms = tempRooms.filter(room => room.field_type === type)
        }
        if(capacity !== 'all'){
         tempRooms = tempRooms.filter(room => room.field_capacity >= capacity)
        }
        if(price !== maxPrice){
         tempRooms = tempRooms.filter(room => room.field_price <= price)    
        }
        if(breakfast) {
         tempRooms = tempRooms.filter(room => room.field_breakfast===true)
        }
        if(pets) {
         tempRooms = tempRooms.filter(room => room.field_pets===true)
        }
        this.setState({
            sortedRooms: tempRooms
        })
    }



    render() {
        return (
            <RoomContext.Provider value={{...this.state, getRoom: this.getRoom, handleChange: this.handleChange}}>
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}

const RoomConsumer = RoomContext.Consumer;

export{RoomProvider, RoomConsumer, RoomContext};
