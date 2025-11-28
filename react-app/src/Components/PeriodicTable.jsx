import { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

export default function PeriodicTable(props) {
    const elements = props?.data;
    console.log(elements);

    const maxCols = Math.max(...elements.map(element => element.xpos))
    const maxRows = Math.max(...elements.map(element => element.ypos))

    return (
        <>
            <Grid
                container
                sx={{
                    display: 'grid',
                    gridTemplateColumns: `repeat(${maxCols}, 1fr)`,
                    gap: 1,
                }}
            >
                {
                    elements.map( (element) => (
                        <Paper
                            className='papers'
                            key={element.number}
                            sx={{
                                gridColumn: element.xpos,
                                gridRow: element.ypos,
                                p: 1,
                                textAlign: 'center',
                                cursor: 'pointer',
                                backgroundColor: element.color,
                                width: '70px',
                                height: '70px',
                            }}
                        
                        >
                            <div style={{display: 'flex', flexDirection: 'column'}}>
                                <div style={{fontSize: 10}}>{element.number}</div>
                                <div><strong style={{fontSize: 20}}>{element.symbol}</strong></div>
                                <div style={{fontSize: 12}}>{element.name}</div>
                            </div>
                            
                        </Paper>
                    ))
                }
            </Grid>
        </>
    )
}