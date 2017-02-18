class Blogpost < ApplicationRecord
  validates :title, presence: true
  validates :blog_post, presence: true
end
