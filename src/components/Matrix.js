import React, {useState} from "react";
import './matrix.css'
// rooms = [{name: 1, attributes: [{name: "test", percentage: 0.5, units: 2}]}]
const Matrix = ({rooms}) => {
    const width = 800;
    const attributeNames = rooms[0].attributes.map((attribute, i) => attribute.attributeName);
    const cellWidth = width/(attributeNames.length + 2);
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
                            <div style={{width: cellWidth}} className="table-cell">${room.name}</div>
                            {room.attributes.map((attribute, i) => {
                                totalRoomCost += attribute.cost;
                                return <div className="table-cell" style={{width: cellWidth}}>${attribute.cost}</div>
                            })}
                            <div style={{width: cellWidth}} className="table-cell">${totalRoomCost}</div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
    
}

export default Matrix;