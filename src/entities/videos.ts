import {
	Entity,
	Column,
	CreateDateColumn,
	PrimaryColumn,
	ManyToMany,
	JoinColumn,
	ManyToOne,
} from "typeorm"
import { v4 as uuidv4 } from "uuid"
import Category from "./category"

@Entity("videos")
export default class Videos {
	@PrimaryColumn()
	id: string

	@Column()
	name: string

	@Column()
	description: string

	@Column()
	duration: number

	@Column()
	category_id: string

	@ManyToOne(() => Category)
	@JoinColumn({ name: "category_id" })
	category: Category

	@CreateDateColumn()
	created_at: Date

	constructor() {
		if (!this.id) this.id = uuidv4()
	}
}
