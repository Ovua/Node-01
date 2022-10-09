import app from './app'

const PORT = process.env.PORT||3001

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`)
} )
