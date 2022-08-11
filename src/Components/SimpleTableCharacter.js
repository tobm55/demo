import Table from 'react-bootstrap/Table';

function SimpleTableCharacter({data}) {
    console.log(data.character['10'])
    const genderType = ['male']


    const tableinfo = () => {
        
        
            return (
                <tbody>{
                    Object.keys(data.character).map((item, index) => {
                        return ( index < 5 &&
                            
                                
                            <tr key={data.character[item]}>
                                <td>{data.character[item]['clustered_names']}</td>
                                <td
                                >{data.character[item]['gender']}</td>
                                <td
                                >{data.character[item]['importance']}</td>
                                <td>{data.character[item]['event_n']}</td>
                            </tr>
                                
                      );
                    })}
                </tbody>
            )

        
        
        
    }

console.log(tableinfo())

    return (
        <Table striped bordered hover variant='dark'> {data && <>
            <thead>
                <tr>
                    <th colSpan={4}>Story Level Character Statistics
                    </th>
                    

                </tr>
                <tr>
                <th>Name</th> <th>Gender</th> <th>Importance</th> <th> Appearance</th>
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

export default SimpleTableCharacter;