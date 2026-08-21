import { useState } from 'react';



function FiveStarCharges({ numberOfCharges }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', marginTop: 5, marginBottom: 5 }}>
            { numberOfCharges === 0 && (
                <div style={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
                    <div style={{ height: 18, width: 27, backgroundColor: '#00293d', borderWidth: 1, borderStyle: 'solid', borderColor: '#0081ae', borderRadius: 5 }} />
                    <div style={{ height: 18, width: 27, backgroundColor: '#00293d', borderWidth: 1, borderStyle: 'solid', borderColor: '#0081ae', borderRadius: 5 }} />
                    <div style={{ height: 18, width: 27, backgroundColor: '#00293d', borderWidth: 1, borderStyle: 'solid', borderColor: '#0081ae', borderRadius: 5 }} />
                    <div style={{ height: 18, width: 27, backgroundColor: '#00293d', borderWidth: 1, borderStyle: 'solid', borderColor: '#0081ae', borderRadius: 5 }} />
                    <div style={{ height: 18, width: 27, backgroundColor: '#00293d', borderWidth: 1, borderStyle: 'solid', borderColor: '#0081ae', borderRadius: 5 }} />
                </div>
            )}

            { numberOfCharges === 1 && (
                <div style={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
                    <div style={{ height: 20, width: 29, backgroundColor: '#0081AE', borderRadius: 5 }} />
                    <div style={{ height: 18, width: 27, backgroundColor: '#00293d', borderWidth: 1, borderStyle: 'solid', borderColor: '#0081ae', borderRadius: 5 }} />
                    <div style={{ height: 18, width: 27, backgroundColor: '#00293d', borderWidth: 1, borderStyle: 'solid', borderColor: '#0081ae', borderRadius: 5 }} />
                    <div style={{ height: 18, width: 27, backgroundColor: '#00293d', borderWidth: 1, borderStyle: 'solid', borderColor: '#0081ae', borderRadius: 5 }} />
                    <div style={{ height: 18, width: 27, backgroundColor: '#00293d', borderWidth: 1, borderStyle: 'solid', borderColor: '#0081ae', borderRadius: 5 }} />
                </div>
            )}

            { numberOfCharges === 2 && (
                <div style={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
                    <div style={{ height: 20, width: 29, backgroundColor: '#0081AE', borderRadius: 5 }} />
                    <div style={{ height: 20, width: 29, backgroundColor: '#0081AE', borderRadius: 5 }} />
                    <div style={{ height: 18, width: 27, backgroundColor: '#00293d', borderWidth: 1, borderStyle: 'solid', borderColor: '#0081ae', borderRadius: 5 }} />
                    <div style={{ height: 18, width: 27, backgroundColor: '#00293d', borderWidth: 1, borderStyle: 'solid', borderColor: '#0081ae', borderRadius: 5 }} />
                    <div style={{ height: 18, width: 27, backgroundColor: '#00293d', borderWidth: 1, borderStyle: 'solid', borderColor: '#0081ae', borderRadius: 5 }} />
                </div>
            )}

            { numberOfCharges === 3 && (
                <div style={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
                    <div style={{ height: 20, width: 29, backgroundColor: '#0081AE', borderRadius: 5 }} />
                    <div style={{ height: 20, width: 29, backgroundColor: '#0081AE', borderRadius: 5 }} />
                    <div style={{ height: 20, width: 29, backgroundColor: '#0081AE', borderRadius: 5 }} />
                    <div style={{ height: 18, width: 27, backgroundColor: '#00293d', borderWidth: 1, borderStyle: 'solid', borderColor: '#0081ae', borderRadius: 5 }} />
                    <div style={{ height: 18, width: 27, backgroundColor: '#00293d', borderWidth: 1, borderStyle: 'solid', borderColor: '#0081ae', borderRadius: 5 }} />
                </div>
            )}

            { numberOfCharges === 4 && (
                <div style={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
                    <div style={{ height: 20, width: 29, backgroundColor: '#0081AE', borderRadius: 5 }} />
                    <div style={{ height: 20, width: 29, backgroundColor: '#0081AE', borderRadius: 5 }} />
                    <div style={{ height: 20, width: 29, backgroundColor: '#0081AE', borderRadius: 5 }} />
                    <div style={{ height: 20, width: 29, backgroundColor: '#0081AE', borderRadius: 5 }} />
                    <div style={{ height: 18, width: 27, backgroundColor: '#00293d', borderWidth: 1, borderStyle: 'solid', borderColor: '#0081ae', borderRadius: 5 }} />

                </div>
            )}

            { numberOfCharges === 5 && (
                <div style={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
                    <div style={{ height: 20, width: 29, backgroundColor: '#0081AE', borderRadius: 5 }} />
                    <div style={{ height: 20, width: 29, backgroundColor: '#0081AE', borderRadius: 5 }} />
                    <div style={{ height: 20, width: 29, backgroundColor: '#0081AE', borderRadius: 5 }} />
                    <div style={{ height: 20, width: 29, backgroundColor: '#0081AE', borderRadius: 5 }} />
                    <div style={{ height: 20, width: 29, backgroundColor: '#0081AE', borderRadius: 5 }} />
                </div>
            )}
        </div>
    )
}

export default FiveStarCharges