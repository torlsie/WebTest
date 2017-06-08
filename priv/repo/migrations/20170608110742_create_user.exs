defmodule Web.Repo.Migrations.CreateUser do
  use Ecto.Migration

  def change do
    create table(:users) do
      add :title, :string
      add :body, :string

      timestamps()
    end

  end
end
