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
- belongs_to :groups_users

## groupテーブル
|Column|Type|Options|
|------|----|-------|
|group-name|string|null: false, foreign: true|
|user_id|integer|null: false, foreign: true|

### Association
- belongs_to :message

## messageテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign: true|
|group_id|integer|null: false, foreign: true|
|body|text|null: false, foreign: true|
|image|string|null: false, foreign: true|

### Association
- belongs_to :groups_users
- belongs_to :group
- belongs_to :user
