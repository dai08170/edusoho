<?php

namespace Application\Migrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Types\Type;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20160510152644 extends AbstractMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        $tableNames = array('article', 'course', 'classroom', 'user');
        foreach ($tableNames as $tableName){
            if($schema->hasTable($tableName) && $table = $schema->getTable($tableName)){
                if(!$table->hasColumn('article')){
                    $table->addColumn('orgCode', Type::STRING, array(
                        'length' => '255',
                        'notnull' => true,
                        'default' => '1.',
                        'comment' => '组织机构内部编码'
                    ));
                }
            }
        }
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs

    }
}
