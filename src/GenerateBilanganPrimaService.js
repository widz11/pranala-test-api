export class GenerateBilanganPrimaService {
    generate(request) {
        const { input } = request
        const result = []
        const except = [2, 3, 5, 7]
        for (let i = 2; i <= input; i++) {
            if (except.includes(i)) {
                result.push(i)
                continue
            }
            if (this.isPrima(i)) {
                result.push(i)
            }
        }
        return result
    }

    isPrima(i) {
        return i % 2 != 0 && i % 3 != 0 && i % 5 != 0 && i %7 != 0
    }
}