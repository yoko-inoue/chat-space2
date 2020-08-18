# README
## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## userテーブル

|Column|Type|Options|
|------|----|-------|
|user-name|string|null: false, foreign_key: true|
|e-mail|string|null: false|
|group_id|intenger|null: false, foreign_key: true|

### Association
- has_many :groups_users
- has_many :groups, through: users_groups
- has_many :messages

## groupテーブル
|Column|Type|Options|
|------|----|-------|
|group-name|string|null: false, foreign: true|
|user_id|integer|null: false, foreign: true|

### Association
- has_many :group_users
- has_many :users, through: users_groups
- has_many :messages

## messageテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign: true|
|group_id|integer|null: false, foreign: true|
|body|text|null: false, foreign: true|
|image|string|null: false, foreign: true|

### Association
- belongs_to :group
- belongs_to :user
