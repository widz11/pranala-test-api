export class GenerateSegitigaService {
    generate(request) {
        const { input } = request
        const result = []
        let counter = 0;
        for (let value of input) {
            for (let i = 0; i <= counter; i++) {
                value += "0"
            }
            result.push(value)
            counter++
        }
        return result
    }    
}