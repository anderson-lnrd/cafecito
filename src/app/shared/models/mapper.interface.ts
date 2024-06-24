export interface Mapper<T> {
    map (record: any): T
}