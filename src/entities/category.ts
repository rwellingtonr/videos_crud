import { Entity, Column, CreateDateColumn, PrimaryColumn } from "typeorm"
import { v4 as uuidv4 } from "uuid"

@Entity("categories")
export default class Category {
	@PrimaryColumn()
	id: string

	@Column()
	name: string

	@Column()
	description: string

	@CreateDateColumn()
	created_at: Date

	constructor() {
		if (!this.id) this.id = uuidv4()
	}
}
