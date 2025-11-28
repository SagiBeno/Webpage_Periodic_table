import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import MyModal from './MyModal';

export default function PeriodicTable(props) {
    const elements = props?.data;
    const [showModal, setShowModal] = useState(false);
    const [element, setElement] = useState();

    const maxCols = Math.max(...elements.map(element => element.xpos));
    const maxRows = Math.max(...elements.map(element => element.ypos));

    const handleShowMore = elementNumber => {
        setShowModal(true);

        elements.map((element) => {
            if (element.number === elementNumber) setElement(element);
        })
    }

    return (
        <>
            <Grid
                container
                sx={{
                    display: 'grid',
                    gridTemplateColumns: `repeat(${maxCols}, 1fr)`,
                    gap: 1,
                    margin: '0 auto',
                    overflowX: 'auto',
                    scrollBehavior: 'smooth',
                    p: 1,
                    maxWidth: '90vw',
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
                                width: '75px',
                                height: '75px',
                            }}

                            onClick={() => handleShowMore(element.number)}
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
            {
                showModal && <MyModal element={element} show={showModal} close={setShowModal}/>
            }
        </>
    )
}