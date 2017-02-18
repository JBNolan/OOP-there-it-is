class CreateBlogposts < ActiveRecord::Migration[5.0]
  def change
    create_table :blogposts do |t|
      t.string :title, null: false
      t.text :blog_post, null: false
      t.timestamps
    end
  end
end
