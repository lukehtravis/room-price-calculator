import React, {useContext} from "react";
import './matrix.css'
import { RoomsContext } from "../context/RoomsContext";
import calculateAttributePricePerRoom from '../utils/calculateAttributePricePerRoom'

const Matrix = () => {
    const {rooms, attributes, rent} = useContext(RoomsContext)
    const width = 800;
    const attributeNames = attributes.map((attribute) => attribute.name);
    const cellWidth = width/(attributeNames.length + 2);
    let rentTotal = 0
    const attributeTotals = {} 
    rooms.forEach(room => {
        room.roomAttributes.forEach(attribute => {
            if (attribute.name in attributeTotals) {
                attributeTotals[attribute.name] += attribute.units 
            } else {
                attributeTotals[attribute.name] = attribute.units
            }
        })
    })
    return (
        <div className="container">
            <div className="table" style={{width: width}}>
                <div className="table-header">
                    <div className="table-header-row"> 
                        <div className="table-header-cell" style={{width: cellWidth}}>Rooms</div>
                        {attributeNames.map((attributeName, i) => <div key={i} style={{width: cellWidth}} className="table-header-cell">{attributeName}</div>)}
                        <div className="table-header-cell" style={{width: cellWidth}}>Total Cost</div>
                    </div>
                </div>
                <div className="table-body">
                    {rooms.map((room, i) => {
                        let totalRoomCost = 0;
                        return <div className="table-row">
                            <div style={{width: cellWidth}} className="table-cell">{room.name}</div>
                            {
                                room.roomAttributes.map((attribute, i) => {
                                totalRoomCost += attribute.units;
                                // roomUnits, totalAttributeUnits, attributePercentage, totalRent
                                console.log(attribute.units, attributeTotals[attribute.name], attributes[i].percentageOfRent, rent)
                                console.log(calculateAttributePricePerRoom(attribute.units, attributeTotals[attribute.name], attributes[i].percentageOfRent, rent))
                                return <div className="table-cell" style={{width: cellWidth}}>${calculateAttributePricePerRoom(attribute.units, attributeTotals[attribute.name], attributes[i].percentageOfRent, rent)}</div>
                            })}
                            <div style={{width: cellWidth}} className="table-cell">${totalRoomCost}</div>
                        </div>
                    })}
                    <div className="table-row">
                        <div style={{width: cellWidth}} className="table-cell">Totals</div>
                        {Object.keys(attributeTotals).map(attributeKey => {
                            const attributeTotal = attributeTotals[attributeKey];
                            rentTotal += attributeTotal
                            return <div className="table-cell" style={{width: cellWidth}}>${attributeTotal}</div>
                        })}
                        <div className="table-cell" style={{width: cellWidth}}>${rentTotal}</div>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default Matrix;