import { Pagination, ThemeProvider } from '@mui/material'
import { createTheme } from '@material-ui/core'

const darkTheme = createTheme({
    palette: {
        type: 'dark'
    }
})

const CustomPagination = (props) => {
    const handleChangePage = (e) => {
        props.setPage(e.target.textContent)
    }

    return (
        <ThemeProvider theme={darkTheme}>
            <Pagination 
                count={500} 
                shape="rounded"
                onChange={handleChangePage}
                hideNextButton
                hidePrevButton
                variant='outlined'
                color='primary'
                className='d-flex justify-content-center mt-4'
            />
        </ThemeProvider>
    )
}

export default CustomPagination
