import Table from 'react-bootstrap/Table';

function SimpleTable({data}) {
    console.log(data)
    const genderType = ['female', 'male']


    const tableinfo = () => {
        return(
        genderType.map((sectionName) => {
            return (
                <tbody>{
                    Object.keys(data.story.characters).filter((key) => key == sectionName).map((item) => {
                        return (
                            <tr key={data.story.characters[item].verb_start_byte}>
                                <td>{sectionName}</td>
                                <td
                                >{data.story.characters[item].n}</td>
                            </tr>
                        );
                    })}
                </tbody>
            )

        }
        )
        )
    }

console.log(tableinfo())

    return (
        <Table striped bordered hover variant='dark'> {data && <>
            <thead>
                <tr>
                    <th colSpan={4}>Story Level Event Statistics by Gender'
                    </th>

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

export default SimpleTable;