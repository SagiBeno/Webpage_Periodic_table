import Modal from "@mui/material/Modal";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';

function isDark(hexColor) {
    hexColor = hexColor.replace("#", "");
    const r = Number(hexColor.substring(0, 2), 16);
    const g = Number(hexColor.substring(2, 4), 16);
    const b = Number(hexColor.substring(4, 6), 16);
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b);
    return luminance < 128;
}

export default function MyModal(props) {
    const showModal = props?.show;
    const element = props?.element;

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        borderRadius: '6px',
        backgroundColor: element.color,
        color: isDark(element.color) ? 'white' : 'black',
        padding: '15px',
        overflowX: 'auto',
        scrollBehavior: 'smooth',
        maxHeight: '80vh',
        maxWidth: '80vw',
    };

    const handleClose = () => {
        props?.close(false)
    }

    return (
        <>
            <Modal
                open={showModal}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="transition-modal-description"
            >
                <Box style={style}>
                    <Box xs={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', p: 2, position: 'relative' }}>
                        <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ textAlign: 'center', flexGrow: 1, pr: 4, fontWeight: 'bold' }}>
                            {element.name} ({element.symbol})
                        </Typography>

                        <IconButton sx={{ position: 'absolute', right: 8, top: 8 }} onClick={() => handleClose()}>
                            <ClearRoundedIcon />
                        </IconButton>
                    </Box>

                    <Box>
                        {element.summary &&
                            <Typography id="modal-modal-description" sx={{ mt: 2, textAlign: 'justify' }}>
                                <strong>Description: </strong>{element.summary}
                            </Typography>
                        }

                        {element.appearance &&
                            <Typography id="modal-modal-description" sx={{ mt: 2, textAlign: 'justify' }}>
                                <strong>Appearance: </strong>{element.appearance}
                            </Typography>
                        }

                        {element.source &&
                            <Typography id="modal-modal-description" sx={{ mt: 2, textAlign: 'justify' }}>
                                <strong>Source: <Link href={element.source} target="_blank" style={{ color: isDark(element.color) ? 'white' : 'black', fontStyle: 'italic', fontWeight: 'bold', }}>please click here!</Link></strong>
                            </Typography>
                        }

                    </Box>

                    <Box sx={{ textAlign: 'center', marginTop: '10px', padding: '10px' }}>
                        <strong>More details</strong>
                        <TableContainer component={Paper} style={{marginTop: '10px', overflowY: 'scroll', scrollBehavior: 'smooth', maxHeight: '200px', }}>
                            <Table sx={{ minWidth: 300 }} aria-label="simple table">
                                <TableBody>
                                    {element.atomic_mass && (
                                        <TableRow>
                                            <TableCell>Atomic mass</TableCell>
                                            <TableCell>{element.atomic_mass}</TableCell>
                                        </TableRow>
                                    )}

                                    {element.boil && (
                                        <TableRow>
                                            <TableCell>Boiling point</TableCell>
                                            <TableCell>{element.boil} K</TableCell>
                                        </TableRow>
                                    )}

                                    {element.category && (
                                        <TableRow>
                                            <TableCell>Category</TableCell>
                                            <TableCell>{element.category}</TableCell>
                                        </TableRow>
                                    )}

                                    {element.density && (
                                        <TableRow>
                                            <TableCell>Density</TableCell>
                                            <TableCell>{element.density} g/L</TableCell>
                                        </TableRow>
                                    )}

                                    {element.discovered_by && (
                                        <TableRow>
                                            <TableCell>Descovered by</TableCell>
                                            <TableCell>{element.discovered_by}</TableCell>
                                        </TableRow>
                                    )}

                                    {element.melt && (
                                        <TableRow>
                                            <TableCell>Melting point</TableCell>
                                            <TableCell>{element.melt} K</TableCell>
                                        </TableRow>
                                    )}

                                    {element.molar_heat && (
                                        <TableRow>
                                            <TableCell>Molar heat</TableCell>
                                            <TableCell>{element.molar_heat} J/(mol·K)</TableCell>
                                        </TableRow>
                                    )}

                                    {element.named_by && (
                                        <TableRow>
                                            <TableCell>Named by</TableCell>
                                            <TableCell>{element.named_by}</TableCell>
                                        </TableRow>
                                    )}

                                    {element.named_by && (
                                        <TableRow>
                                            <TableCell>Named by</TableCell>
                                            <TableCell>{element.named_by}</TableCell>
                                        </TableRow>
                                    )}

                                    {element.period && (
                                        <TableRow>
                                            <TableCell>Period</TableCell>
                                            <TableCell>{element.period}</TableCell>
                                        </TableRow>
                                    )}

                                    {element.phase.length > 0 && (
                                        <TableRow>
                                            <TableCell>Phase</TableCell>
                                            <TableCell>{element.phase}</TableCell>
                                        </TableRow>
                                    )}

                                    {element.shells.length > 0 && (
                                        <TableRow>
                                            <TableCell>Electrons per shell</TableCell>
                                            <TableCell>{element.shells.join(', ')}</TableCell>
                                        </TableRow>
                                    )}

                                    {element.electron_configuration && (
                                        <TableRow>
                                            <TableCell>Electron configuration</TableCell>
                                            <TableCell>{element.electron_configuration}</TableCell>
                                        </TableRow>
                                    )}

                                    {element.electron_affinity && (
                                        <TableRow>
                                            <TableCell>Electron affinity</TableCell>
                                            <TableCell>{element.electron_affinity}</TableCell>
                                        </TableRow>
                                    )}

                                    {element.electronegativity_pauling && (
                                        <TableRow>
                                            <TableCell>Electronegativity</TableCell>
                                            <TableCell>{element.electronegativity_pauling}</TableCell>
                                        </TableRow>
                                    )}

                                    {element.ionization_energies.length > 0 && (
                                        <TableRow>
                                            <TableCell>Ionization energies</TableCell>
                                            <TableCell>{element.ionization_energies.join(' kJ/mol, ')} kJ/mol</TableCell>
                                        </TableRow>
                                    )}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
                </Box>
            </Modal>
        </>
    )
}