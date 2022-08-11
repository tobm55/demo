import Table from 'react-bootstrap/Table';

function SimpleTableTopMale({data}) {
    //console.log(data)
    const genderType = ['male']


    const tableinfo = () => {
        return(
        genderType.map((sectionName) => {
            return (
                <tbody>{
                    Object.keys(data.story.events.top_events).filter((key) => key == sectionName).map((item) => {
                        return (
                            data.story.events.top_events[item].map((unit, index) => {
                                return( index < 5 &&
                            <tr key={unit.female_male_odds}>
                                <td>{unit.event_lemma}</td>
                                <td
                                >{unit.argument}</td>
                                <td>{unit.male_female_odds}</td>
                            </tr>
                                )
                     }) );
                    })}
                </tbody>
            )

        }
        )
        )
    }

//console.log(tableinfo())

    return (
        <Table striped bordered hover variant='dark'> {data && <>
            <thead>
                <tr>
                    <th colSpan={4}>Top Male Character Events
                    </th>
                    

                </tr>
                <tr>
                <th>Event</th> <th>Argument</th> <th>Log Odds</th>
                </tr>
            </thead>
            
                
                    {
                        tableinfo()
                    }

                
            
        </>
        }
        </Table>
    );
}

export default SimpleTableTopMale;