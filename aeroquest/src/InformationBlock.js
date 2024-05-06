// Information Block Component Implementation 


// Dependencies 
import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardMedia, CardContent, Typography } from '@mui/material';
import { AirplanemodeActive } from '@mui/icons-material';


// Components & Necessary Files


// Information Block Component 
function InformationBlock({ data }) {


    return(
        <div className = "information-block">
      {data.map((item) => (
        <Card 
            key={item.id} 
            sx={{ 
                  alignItems: 'center',
                  border: '3px solid #212121',
                  borderRadius: '4px',
                  color: '#212121',
                  fontSize: 'xx-large',
                  fontWeight: 'bold',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  width: '38rem',
                  height: '13rem',
                  margin: 'auto',
                  marginBottom: '10px' ,
                  textAlign: 'center',
                  width: '38vw',
        }}
        >
          <CardContent>
            <Typography
              variant = 'h4'
            >
            <span style = {{ fontSize: '2rem', color: 'cyan' }}>
              <AirplanemodeActive fontSize = 'large'></AirplanemodeActive>
            </span>
            { item.model_name }
            </Typography>
            <Typography 
              variant = 'h6'
            > 
              Airplane ID: { item.airplane_id }
            </Typography>
            <Typography 
              variant = 'h6'
            >
              Construction Number: { item.construction_number }
            </Typography>
            <Typography
              variant = 'h6'
            >
            First Flight Date: { item.first_flight_date }
            </Typography>
            <Typography
              variant = 'h6'
            >
            Plane Owner: { item.plane_owner }
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
    );
}

export default InformationBlock;