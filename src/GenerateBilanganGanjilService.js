export class GenerateBilanganGanjilService {
    generate(request) {
        const { input } = request
        const result = []
        for (let i = 0; i <= input; i++) {
            if (i % 2 == 1) {
                result.push(i)
            }
        }
        return result
    }
}