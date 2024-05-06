// Information Block Component Implementation 


// Dependencies 
import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardMedia, CardContent, Typography } from '@mui/material';


// Components & Necessary Files


// Information Block Component 
function InformationBlock({ data }) {


    return(
        <div className="information-block">
      {data.map((item) => (
        <Card 
            key={item.id} 
            sx={{ 
                width: '25vw',
                marginBottom: '10px' 
        }}
        >
          <CardHeader title={item.iata_type} subheader={`Airline IATA Code: ${item.airline_iata_code}`} />
          <CardContent>
            <Typography variant="body1">Airplane ID: {item.airplane_id}</Typography>
            <Typography variant="body2">Construction Number: {item.construction_number}</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
    );
}

export default InformationBlock;